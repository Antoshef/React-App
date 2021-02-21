import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

    const INGREDIENT_PRICES = {
        cheese: 0.7,
        salad: 0.8,
        meat: 1.6,
        bacon: 1.1,
    }

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        ordered: false
    }

    orderHandler = () => {
        this.setState({ordered: true});
    }

    orderCancelHandler = () => {
        this.setState({ordered: false});
    }

    purchaseContinueHandler = () => {
        alert('You continued!');
    }

    purchaseCancelHandler = () => {
        this.setState({ordered: false});
    }

    updatePurchasableHandler = (ingredients) => {
        const some = Object.values(ingredients).some(value => value > 0);
        this.setState({purchasable: some});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const addedPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addedPrice;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchasableHandler(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const deductedPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - deductedPrice;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchasableHandler(updatedIngredients);
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal 
                    show={this.state.ordered}
                    cancelOrder={this.orderCancelHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        purchaseContinue={this.purchaseContinueHandler}
                        purchaseCancel={this.purchaseCancelHandler}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = { this.addIngredientHandler }
                    ingredientRemoved = { this.removeIngredientHandler }
                    disabled = { disabledInfo }
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {() => this.orderHandler()}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;