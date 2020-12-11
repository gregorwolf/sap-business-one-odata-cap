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
exports.DunningTermLine = exports.DunningTermLineField = exports.createDunningTermLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DunningTermLine.build]] instead.
 */
function createDunningTermLine(json) {
    return DunningTermLine.build(json);
}
exports.createDunningTermLine = createDunningTermLine;
/**
 * DunningTermLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DunningTermLineField = /** @class */ (function (_super) {
    __extends(DunningTermLineField, _super);
    /**
     * Creates an instance of DunningTermLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DunningTermLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DunningTermLine) || this;
        /**
         * Representation of the [[DunningTermLine.levelNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.levelNum = new core_1.ComplexTypeNumberPropertyField('LevelNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DunningTermLine.letterFormat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.letterFormat = new core_1.ComplexTypeEnumPropertyField('LetterFormat', _this);
        /**
         * Representation of the [[DunningTermLine.effectiveafter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveafter = new core_1.ComplexTypeStringPropertyField('Effectiveafter', _this, 'Edm.String');
        /**
         * Representation of the [[DunningTermLine.letterFee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.letterFee = new core_1.ComplexTypeNumberPropertyField('LetterFee', _this, 'Edm.Double');
        /**
         * Representation of the [[DunningTermLine.letterFeeCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.letterFeeCurrency = new core_1.ComplexTypeStringPropertyField('LetterFeeCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[DunningTermLine.mininumBalance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mininumBalance = new core_1.ComplexTypeNumberPropertyField('MininumBalance', _this, 'Edm.Double');
        /**
         * Representation of the [[DunningTermLine.mininumBalanceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mininumBalanceCurrency = new core_1.ComplexTypeStringPropertyField('MininumBalanceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[DunningTermLine.calculateInterest]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateInterest = new core_1.ComplexTypeEnumPropertyField('CalculateInterest', _this);
        return _this;
    }
    return DunningTermLineField;
}(core_1.ComplexTypeField));
exports.DunningTermLineField = DunningTermLineField;
var DunningTermLine;
(function (DunningTermLine) {
    /**
     * Metadata information on all properties of the `DunningTermLine` complex type.
     */
    DunningTermLine._propertyMetadata = [{
            originalName: 'LevelNum',
            name: 'levelNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LetterFormat',
            name: 'letterFormat',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Effectiveafter',
            name: 'effectiveafter',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LetterFee',
            name: 'letterFee',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LetterFeeCurrency',
            name: 'letterFeeCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MininumBalance',
            name: 'mininumBalance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MininumBalanceCurrency',
            name: 'mininumBalanceCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CalculateInterest',
            name: 'calculateInterest',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DunningTermLine);
    }
    DunningTermLine.build = build;
})(DunningTermLine = exports.DunningTermLine || (exports.DunningTermLine = {}));
//# sourceMappingURL=DunningTermLine.js.map