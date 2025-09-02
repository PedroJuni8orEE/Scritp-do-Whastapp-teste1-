class WhatsAppService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async sendMessage(to, message) {
        try {
            const response = await this.apiClient.sendMessage(to, message);
            return response;
        } catch (error) {
            throw new Error('Error sending message: ' + error.message);
        }
    }

    async receiveMessage() {
        try {
            const message = await this.apiClient.receiveMessage();
            return message;
        } catch (error) {
            throw new Error('Error receiving message: ' + error.message);
        }
    }
}

export default WhatsAppService;