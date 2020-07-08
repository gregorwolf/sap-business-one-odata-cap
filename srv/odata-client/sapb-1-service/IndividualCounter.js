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
exports.IndividualCounter = exports.IndividualCounterField = exports.createIndividualCounter = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[IndividualCounter.build]] instead.
 */
function createIndividualCounter(json) {
    return IndividualCounter.build(json);
}
exports.createIndividualCounter = createIndividualCounter;
/**
 * IndividualCounterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var IndividualCounterField = /** @class */ (function (_super) {
    __extends(IndividualCounterField, _super);
    function IndividualCounterField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[IndividualCounter.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndividualCounter.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new v4_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndividualCounter.counterName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterName = new v4_1.ComplexTypeStringPropertyField('CounterName', _this, 'Edm.String');
        /**
         * Representation of the [[IndividualCounter.counterNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterNumber = new v4_1.ComplexTypeNumberPropertyField('CounterNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndividualCounter.counterVisualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterVisualOrder = new v4_1.ComplexTypeNumberPropertyField('CounterVisualOrder', _this, 'Edm.Int32');
        return _this;
    }
    return IndividualCounterField;
}(v4_1.ComplexTypeField));
exports.IndividualCounterField = IndividualCounterField;
var IndividualCounter;
(function (IndividualCounter) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            CounterID: function (counterId) { return ({ counterId: v4_1.edmToTs(counterId, 'Edm.Int32') }); },
            CounterName: function (counterName) { return ({ counterName: v4_1.edmToTs(counterName, 'Edm.String') }); },
            CounterNumber: function (counterNumber) { return ({ counterNumber: v4_1.edmToTs(counterNumber, 'Edm.Int32') }); },
            CounterVisualOrder: function (counterVisualOrder) { return ({ counterVisualOrder: v4_1.edmToTs(counterVisualOrder, 'Edm.Int32') }); }
        });
    }
    IndividualCounter.build = build;
})(IndividualCounter = exports.IndividualCounter || (exports.IndividualCounter = {}));
//# sourceMappingURL=IndividualCounter.js.map