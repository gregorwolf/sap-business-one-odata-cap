"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandedCostCostLine = exports.LandedCostCostLineField = exports.createLandedCostCostLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[LandedCostCostLine.build]] instead.
 */
function createLandedCostCostLine(json) {
    return LandedCostCostLine.build(json);
}
exports.createLandedCostCostLine = createLandedCostCostLine;
/**
 * LandedCostCostLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LandedCostCostLineField = /** @class */ (function (_super) {
    __extends(LandedCostCostLineField, _super);
    function LandedCostCostLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[LandedCostCostLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostCostLine.landedCostCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.landedCostCode = new v4_1.ComplexTypeStringPropertyField('LandedCostCode', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostCostLine.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new v4_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.amountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountFc = new v4_1.ComplexTypeNumberPropertyField('AmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new v4_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.openAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmount = new v4_1.ComplexTypeNumberPropertyField('OpenAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.openAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountFc = new v4_1.ComplexTypeNumberPropertyField('OpenAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.broker]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.broker = new v4_1.ComplexTypeStringPropertyField('Broker', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostCostLine.brokerName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.brokerName = new v4_1.ComplexTypeStringPropertyField('BrokerName', _this, 'Edm.String');
        return _this;
    }
    return LandedCostCostLineField;
}(v4_1.ComplexTypeField));
exports.LandedCostCostLineField = LandedCostCostLineField;
var LandedCostCostLine;
(function (LandedCostCostLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LandedCostCode: function (landedCostCode) { return ({ landedCostCode: v4_1.edmToTs(landedCostCode, 'Edm.String') }); },
            Amount: function (amount) { return ({ amount: v4_1.edmToTs(amount, 'Edm.Double') }); },
            AmountFC: function (amountFc) { return ({ amountFc: v4_1.edmToTs(amountFc, 'Edm.Double') }); },
            Factor: function (factor) { return ({ factor: v4_1.edmToTs(factor, 'Edm.Double') }); },
            OpenAmount: function (openAmount) { return ({ openAmount: v4_1.edmToTs(openAmount, 'Edm.Double') }); },
            OpenAmountFC: function (openAmountFc) { return ({ openAmountFc: v4_1.edmToTs(openAmountFc, 'Edm.Double') }); },
            Broker: function (broker) { return ({ broker: v4_1.edmToTs(broker, 'Edm.String') }); },
            BrokerName: function (brokerName) { return ({ brokerName: v4_1.edmToTs(brokerName, 'Edm.String') }); }
        });
    }
    LandedCostCostLine.build = build;
})(LandedCostCostLine = exports.LandedCostCostLine || (exports.LandedCostCostLine = {}));
//# sourceMappingURL=LandedCostCostLine.js.map