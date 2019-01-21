class Article {
    constructor() {
        this.created = new Date();
        Article.count++;
        Article.last = this.created;
    }
    static showStats() {
        console.log(`Total: ${this.count}, Last: (${this.last})`);
    }
}
Article.count = 0;


new Article();
new Article();

Article.showStats(); // Total: 2, Last: (data)

new Article();

Article.showStats(); // Total: 3, Last: (data)