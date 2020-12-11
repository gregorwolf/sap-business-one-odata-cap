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
exports.EmailGroupParams = exports.EmailGroupParamsField = exports.createEmailGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmailGroupParams.build]] instead.
 */
function createEmailGroupParams(json) {
    return EmailGroupParams.build(json);
}
exports.createEmailGroupParams = createEmailGroupParams;
/**
 * EmailGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmailGroupParamsField = /** @class */ (function (_super) {
    __extends(EmailGroupParamsField, _super);
    /**
     * Creates an instance of EmailGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmailGroupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmailGroupParams) || this;
        /**
         * Representation of the [[EmailGroupParams.emailGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailGroupCode = new core_1.ComplexTypeStringPropertyField('EmailGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[EmailGroupParams.emailGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailGroupName = new core_1.ComplexTypeStringPropertyField('EmailGroupName', _this, 'Edm.String');
        return _this;
    }
    return EmailGroupParamsField;
}(core_1.ComplexTypeField));
exports.EmailGroupParamsField = EmailGroupParamsField;
var EmailGroupParams;
(function (EmailGroupParams) {
    /**
     * Metadata information on all properties of the `EmailGroupParams` complex type.
     */
    EmailGroupParams._propertyMetadata = [{
            originalName: 'EmailGroupCode',
            name: 'emailGroupCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EmailGroupName',
            name: 'emailGroupName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmailGroupParams);
    }
    EmailGroupParams.build = build;
})(EmailGroupParams = exports.EmailGroupParams || (exports.EmailGroupParams = {}));
//# sourceMappingURL=EmailGroupParams.js.map