from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

# Route for the welcome page
@app.route('/')
def index():
    return render_template('index.html')

# Route for DNA Purity Calculator
@app.route('/purity')
def purity():
    return render_template('purity.html')

# Route for DNA Concentration Calculator
@app.route('/concentration')
def concentration():
    return render_template('concentration.html')

# Route for Normality Calculator
@app.route('/normality')
def normality():
    return render_template('normality.html')

# Route for Molarity Calculator
@app.route('/molarity')
def molarity():
    return render_template('molarity.html')

# Route for Molality Calculator
@app.route('/molality')
def molality():
    return render_template('molality.html')

# Route for Dilution Factor Calculator
@app.route('/dilution')
def dilution():
    return render_template('dilution.html')

if __name__ == '__main__':
    app.run(debug=True)
