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
exports.TechnicianSettingsGroup = exports.TechnicianSettingsGroupField = exports.createTechnicianSettingsGroup = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsGroup.build]] instead.
 */
function createTechnicianSettingsGroup(json) {
    return TechnicianSettingsGroup.build(json);
}
exports.createTechnicianSettingsGroup = createTechnicianSettingsGroup;
/**
 * TechnicianSettingsGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TechnicianSettingsGroupField = /** @class */ (function (_super) {
    __extends(TechnicianSettingsGroupField, _super);
    /**
     * Creates an instance of TechnicianSettingsGroupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TechnicianSettingsGroupField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TechnicianSettingsGroup) || this;
        /**
         * Representation of the [[TechnicianSettingsGroup.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSettingsGroup.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[TechnicianSettingsGroup.customizedGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customizedGroup = new core_1.ComplexTypeEnumPropertyField('CustomizedGroup', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.enableEditTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableEditTime = new core_1.ComplexTypeEnumPropertyField('EnableEditTime', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.enableReject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableReject = new core_1.ComplexTypeEnumPropertyField('EnableReject', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.enableResign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableResign = new core_1.ComplexTypeEnumPropertyField('EnableResign', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.enableFollowup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableFollowup = new core_1.ComplexTypeEnumPropertyField('EnableFollowup', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.enableSignature]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableSignature = new core_1.ComplexTypeEnumPropertyField('EnableSignature', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.enableStarRating]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableStarRating = new core_1.ComplexTypeEnumPropertyField('EnableStarRating', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.enableActualDuration]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableActualDuration = new core_1.ComplexTypeEnumPropertyField('EnableActualDuration', _this);
        /**
         * Representation of the [[TechnicianSettingsGroup.advancedDashBoard]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.advancedDashBoard = new core_1.ComplexTypeNumberPropertyField('AdvancedDashBoard', _this, 'Edm.Int32');
        return _this;
    }
    return TechnicianSettingsGroupField;
}(core_1.ComplexTypeField));
exports.TechnicianSettingsGroupField = TechnicianSettingsGroupField;
var TechnicianSettingsGroup;
(function (TechnicianSettingsGroup) {
    /**
     * Metadata information on all properties of the `TechnicianSettingsGroup` complex type.
     */
    TechnicianSettingsGroup._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomizedGroup',
            name: 'customizedGroup',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableEditTime',
            name: 'enableEditTime',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableReject',
            name: 'enableReject',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableResign',
            name: 'enableResign',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableFollowup',
            name: 'enableFollowup',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableSignature',
            name: 'enableSignature',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableStarRating',
            name: 'enableStarRating',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableActualDuration',
            name: 'enableActualDuration',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AdvancedDashBoard',
            name: 'advancedDashBoard',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TechnicianSettingsGroup);
    }
    TechnicianSettingsGroup.build = build;
})(TechnicianSettingsGroup = exports.TechnicianSettingsGroup || (exports.TechnicianSettingsGroup = {}));
//# sourceMappingURL=TechnicianSettingsGroup.js.map