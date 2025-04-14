from flask import Flask, render_template, request
from logic.betting_logic import calculate_odds
from data.database import get_match_list
from models.predictor import predict_winner

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    matches = get_match_list()
    if request.method == 'POST':
        team_a = request.form['team_a']
        team_b = request.form['team_b']
        odds = calculate_odds(team_a, team_b)
        winner, confidence = predict_winner(team_a, team_b)
        return render_template("result.html", team_a=team_a, team_b=team_b, odds=odds, winner=winner, confidence=confidence)
    return render_template("index.html", matches=matches)

if __name__ == '__main__':
    app.run(debug=True)
