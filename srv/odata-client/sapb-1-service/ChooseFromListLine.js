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
exports.ChooseFromListLine = exports.ChooseFromListLineField = exports.createChooseFromListLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListLine.build]] instead.
 */
function createChooseFromListLine(json) {
    return ChooseFromListLine.build(json);
}
exports.createChooseFromListLine = createChooseFromListLine;
/**
 * ChooseFromListLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChooseFromListLineField = /** @class */ (function (_super) {
    __extends(ChooseFromListLineField, _super);
    /**
     * Creates an instance of ChooseFromListLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ChooseFromListLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ChooseFromListLine) || this;
        /**
         * Representation of the [[ChooseFromListLine.fieldNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldNo = new core_1.ComplexTypeStringPropertyField('FieldNo', _this, 'Edm.String');
        /**
         * Representation of the [[ChooseFromListLine.displayedName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayedName = new core_1.ComplexTypeStringPropertyField('DisplayedName', _this, 'Edm.String');
        /**
         * Representation of the [[ChooseFromListLine.groupBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupBy = new core_1.ComplexTypeEnumPropertyField('GroupBy', _this);
        /**
         * Representation of the [[ChooseFromListLine.visible]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visible = new core_1.ComplexTypeEnumPropertyField('Visible', _this);
        /**
         * Representation of the [[ChooseFromListLine.showType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.showType = new core_1.ComplexTypeEnumPropertyField('ShowType', _this);
        /**
         * Representation of the [[ChooseFromListLine.sortOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortOrder = new core_1.ComplexTypeEnumPropertyField('SortOrder', _this);
        /**
         * Representation of the [[ChooseFromListLine.visualIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualIndex = new core_1.ComplexTypeNumberPropertyField('VisualIndex', _this, 'Edm.Int32');
        return _this;
    }
    return ChooseFromListLineField;
}(core_1.ComplexTypeField));
exports.ChooseFromListLineField = ChooseFromListLineField;
var ChooseFromListLine;
(function (ChooseFromListLine) {
    /**
     * Metadata information on all properties of the `ChooseFromListLine` complex type.
     */
    ChooseFromListLine._propertyMetadata = [{
            originalName: 'FieldNo',
            name: 'fieldNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DisplayedName',
            name: 'displayedName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GroupBy',
            name: 'groupBy',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Visible',
            name: 'visible',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ShowType',
            name: 'showType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SortOrder',
            name: 'sortOrder',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'VisualIndex',
            name: 'visualIndex',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ChooseFromListLine);
    }
    ChooseFromListLine.build = build;
})(ChooseFromListLine = exports.ChooseFromListLine || (exports.ChooseFromListLine = {}));
//# sourceMappingURL=ChooseFromListLine.js.map