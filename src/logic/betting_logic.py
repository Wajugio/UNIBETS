def calculate_odds(team_a, team_b):
    return {
        "team_a_odds": "1.75",
        "team_b_odds": "2.05",
        "favorite": team_a if team_a < team_b else team_b
    }
