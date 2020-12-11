"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of IndividualCounterField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function IndividualCounterField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, IndividualCounter) || this;
        /**
         * Representation of the [[IndividualCounter.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndividualCounter.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new core_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndividualCounter.counterType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterType = new core_1.ComplexTypeEnumPropertyField('CounterType', _this);
        /**
         * Representation of the [[IndividualCounter.counterName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterName = new core_1.ComplexTypeStringPropertyField('CounterName', _this, 'Edm.String');
        /**
         * Representation of the [[IndividualCounter.counterNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterNumber = new core_1.ComplexTypeNumberPropertyField('CounterNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndividualCounter.counterVisualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterVisualOrder = new core_1.ComplexTypeNumberPropertyField('CounterVisualOrder', _this, 'Edm.Int32');
        return _this;
    }
    return IndividualCounterField;
}(core_1.ComplexTypeField));
exports.IndividualCounterField = IndividualCounterField;
var IndividualCounter;
(function (IndividualCounter) {
    /**
     * Metadata information on all properties of the `IndividualCounter` complex type.
     */
    IndividualCounter._propertyMetadata = [{
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CounterID',
            name: 'counterId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CounterType',
            name: 'counterType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CounterName',
            name: 'counterName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CounterNumber',
            name: 'counterNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CounterVisualOrder',
            name: 'counterVisualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, IndividualCounter);
    }
    IndividualCounter.build = build;
})(IndividualCounter = exports.IndividualCounter || (exports.IndividualCounter = {}));
//# sourceMappingURL=IndividualCounter.js.map