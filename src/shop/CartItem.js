import React from 'react';


const CartItem = () => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className="information">

                </div>
                <div className="buttons">
                    <button>
                        -
                    </button>

                    <button>
                        +
                    </button>
                </div>

            </div>
        </Wrapper>
    );
};

export default CartItem;
