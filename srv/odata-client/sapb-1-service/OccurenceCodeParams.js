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
exports.OccurenceCodeParams = exports.OccurenceCodeParamsField = exports.createOccurenceCodeParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[OccurenceCodeParams.build]] instead.
 */
function createOccurenceCodeParams(json) {
    return OccurenceCodeParams.build(json);
}
exports.createOccurenceCodeParams = createOccurenceCodeParams;
/**
 * OccurenceCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var OccurenceCodeParamsField = /** @class */ (function (_super) {
    __extends(OccurenceCodeParamsField, _super);
    /**
     * Creates an instance of OccurenceCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function OccurenceCodeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, OccurenceCodeParams) || this;
        /**
         * Representation of the [[OccurenceCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[OccurenceCodeParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[OccurenceCodeParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[OccurenceCodeParams.note]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.note = new core_1.ComplexTypeStringPropertyField('Note', _this, 'Edm.String');
        /**
         * Representation of the [[OccurenceCodeParams.requestedBoeStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requestedBoeStatus = new core_1.ComplexTypeEnumPropertyField('RequestedBoeStatus', _this);
        /**
         * Representation of the [[OccurenceCodeParams.isMovement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isMovement = new core_1.ComplexTypeEnumPropertyField('IsMovement', _this);
        return _this;
    }
    return OccurenceCodeParamsField;
}(core_1.ComplexTypeField));
exports.OccurenceCodeParamsField = OccurenceCodeParamsField;
var OccurenceCodeParams;
(function (OccurenceCodeParams) {
    /**
     * Metadata information on all properties of the `OccurenceCodeParams` complex type.
     */
    OccurenceCodeParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Note',
            name: 'note',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RequestedBoeStatus',
            name: 'requestedBoeStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsMovement',
            name: 'isMovement',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, OccurenceCodeParams);
    }
    OccurenceCodeParams.build = build;
})(OccurenceCodeParams = exports.OccurenceCodeParams || (exports.OccurenceCodeParams = {}));
//# sourceMappingURL=OccurenceCodeParams.js.map