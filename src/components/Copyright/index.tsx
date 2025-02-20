

function Copyright() {
    const date = new Date();
const year = date.getFullYear();
    return (
        <p className="text-center text-neutral-500 my-2">
            © Copyright {year} Madagascar. All rights reserved.
        </p>
    );
}

export default Copyright;
