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
exports.ItemProject = exports.ItemProjectField = exports.createItemProject = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ItemProject.build]] instead.
 */
function createItemProject(json) {
    return ItemProject.build(json);
}
exports.createItemProject = createItemProject;
/**
 * ItemProjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemProjectField = /** @class */ (function (_super) {
    __extends(ItemProjectField, _super);
    /**
     * Creates an instance of ItemProjectField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemProjectField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemProject) || this;
        /**
         * Representation of the [[ItemProject.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemProject.validFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validFrom = new core_1.ComplexTypeDatePropertyField('ValidFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemProject.validTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validTo = new core_1.ComplexTypeDatePropertyField('ValidTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemProject.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        return _this;
    }
    return ItemProjectField;
}(core_1.ComplexTypeField));
exports.ItemProjectField = ItemProjectField;
var ItemProject;
(function (ItemProject) {
    /**
     * Metadata information on all properties of the `ItemProject` complex type.
     */
    ItemProject._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ValidFrom',
            name: 'validFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ValidTo',
            name: 'validTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Project',
            name: 'project',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemProject);
    }
    ItemProject.build = build;
})(ItemProject = exports.ItemProject || (exports.ItemProject = {}));
//# sourceMappingURL=ItemProject.js.map