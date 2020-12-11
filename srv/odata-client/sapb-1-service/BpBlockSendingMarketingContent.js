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
exports.BpBlockSendingMarketingContent = exports.BpBlockSendingMarketingContentField = exports.createBpBlockSendingMarketingContent = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpBlockSendingMarketingContent.build]] instead.
 */
function createBpBlockSendingMarketingContent(json) {
    return BpBlockSendingMarketingContent.build(json);
}
exports.createBpBlockSendingMarketingContent = createBpBlockSendingMarketingContent;
/**
 * BpBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpBlockSendingMarketingContentField = /** @class */ (function (_super) {
    __extends(BpBlockSendingMarketingContentField, _super);
    /**
     * Creates an instance of BpBlockSendingMarketingContentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpBlockSendingMarketingContentField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpBlockSendingMarketingContent) || this;
        /**
         * Representation of the [[BpBlockSendingMarketingContent.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBlockSendingMarketingContent.communicationMediaId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.communicationMediaId = new core_1.ComplexTypeNumberPropertyField('CommunicationMediaId', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBlockSendingMarketingContent.choose]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.choose = new core_1.ComplexTypeEnumPropertyField('Choose', _this);
        return _this;
    }
    return BpBlockSendingMarketingContentField;
}(core_1.ComplexTypeField));
exports.BpBlockSendingMarketingContentField = BpBlockSendingMarketingContentField;
var BpBlockSendingMarketingContent;
(function (BpBlockSendingMarketingContent) {
    /**
     * Metadata information on all properties of the `BpBlockSendingMarketingContent` complex type.
     */
    BpBlockSendingMarketingContent._propertyMetadata = [{
            originalName: 'CardCode',
            name: 'cardCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CommunicationMediaId',
            name: 'communicationMediaId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Choose',
            name: 'choose',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpBlockSendingMarketingContent);
    }
    BpBlockSendingMarketingContent.build = build;
})(BpBlockSendingMarketingContent = exports.BpBlockSendingMarketingContent || (exports.BpBlockSendingMarketingContent = {}));
//# sourceMappingURL=BpBlockSendingMarketingContent.js.map