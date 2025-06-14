document.addEventListener('DOMContentLoaded', function() {
    const checkin = document.querySelector('input[name="checkin"]');
    const checkout = document.querySelector('input[name="checkout"]');
    const today = new Date().toISOString().split("T")[0];
    
    if (checkin) {
        checkin.setAttribute("min", today);
        
        checkin.addEventListener("change", function () {

            if (checkout) {
                const checkinDate = new Date(checkin.value);
                checkinDate.setDate(checkinDate.getDate() + 1);
                const minCheckout = checkinDate.toISOString().split("T")[0];

                checkout.setAttribute("min", minCheckout);
            };
            
        });
    };
});