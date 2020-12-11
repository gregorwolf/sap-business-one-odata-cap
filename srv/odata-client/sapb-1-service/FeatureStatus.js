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
exports.FeatureStatus = exports.FeatureStatusField = exports.createFeatureStatus = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[FeatureStatus.build]] instead.
 */
function createFeatureStatus(json) {
    return FeatureStatus.build(json);
}
exports.createFeatureStatus = createFeatureStatus;
/**
 * FeatureStatusField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FeatureStatusField = /** @class */ (function (_super) {
    __extends(FeatureStatusField, _super);
    /**
     * Creates an instance of FeatureStatusField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function FeatureStatusField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, FeatureStatus) || this;
        /**
         * Representation of the [[FeatureStatus.featureId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.featureId = new core_1.ComplexTypeStringPropertyField('FeatureID', _this, 'Edm.String');
        /**
         * Representation of the [[FeatureStatus.blocked]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blocked = new core_1.ComplexTypeEnumPropertyField('Blocked', _this);
        return _this;
    }
    return FeatureStatusField;
}(core_1.ComplexTypeField));
exports.FeatureStatusField = FeatureStatusField;
var FeatureStatus;
(function (FeatureStatus) {
    /**
     * Metadata information on all properties of the `FeatureStatus` complex type.
     */
    FeatureStatus._propertyMetadata = [{
            originalName: 'FeatureID',
            name: 'featureId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Blocked',
            name: 'blocked',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, FeatureStatus);
    }
    FeatureStatus.build = build;
})(FeatureStatus = exports.FeatureStatus || (exports.FeatureStatus = {}));
//# sourceMappingURL=FeatureStatus.js.map