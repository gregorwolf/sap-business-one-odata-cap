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
exports.ActivityRecipient = exports.ActivityRecipientField = exports.createActivityRecipient = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipient.build]] instead.
 */
function createActivityRecipient(json) {
    return ActivityRecipient.build(json);
}
exports.createActivityRecipient = createActivityRecipient;
/**
 * ActivityRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ActivityRecipientField = /** @class */ (function (_super) {
    __extends(ActivityRecipientField, _super);
    /**
     * Creates an instance of ActivityRecipientField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ActivityRecipientField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ActivityRecipient) || this;
        /**
         * Representation of the [[ActivityRecipient.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ActivityRecipient.recipientType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.recipientType = new core_1.ComplexTypeEnumPropertyField('RecipientType', _this);
        /**
         * Representation of the [[ActivityRecipient.recipientCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.recipientCode = new core_1.ComplexTypeStringPropertyField('RecipientCode', _this, 'Edm.String');
        return _this;
    }
    return ActivityRecipientField;
}(core_1.ComplexTypeField));
exports.ActivityRecipientField = ActivityRecipientField;
var ActivityRecipient;
(function (ActivityRecipient) {
    /**
     * Metadata information on all properties of the `ActivityRecipient` complex type.
     */
    ActivityRecipient._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RecipientType',
            name: 'recipientType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RecipientCode',
            name: 'recipientCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ActivityRecipient);
    }
    ActivityRecipient.build = build;
})(ActivityRecipient = exports.ActivityRecipient || (exports.ActivityRecipient = {}));
//# sourceMappingURL=ActivityRecipient.js.map