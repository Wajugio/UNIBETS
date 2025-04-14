def predict_winner(team_a, team_b):
    # Dummy logic for now
    if team_a < team_b:
        return team_a, 0.65
    else:
        return team_b, 0.62
