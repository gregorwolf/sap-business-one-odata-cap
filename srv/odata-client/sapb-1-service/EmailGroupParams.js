"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function EmailGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmailGroupParams.emailGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailGroupCode = new v4_1.ComplexTypeStringPropertyField('EmailGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[EmailGroupParams.emailGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailGroupName = new v4_1.ComplexTypeStringPropertyField('EmailGroupName', _this, 'Edm.String');
        return _this;
    }
    return EmailGroupParamsField;
}(v4_1.ComplexTypeField));
exports.EmailGroupParamsField = EmailGroupParamsField;
var EmailGroupParams;
(function (EmailGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmailGroupCode: function (emailGroupCode) { return ({ emailGroupCode: v4_1.edmToTs(emailGroupCode, 'Edm.String') }); },
            EmailGroupName: function (emailGroupName) { return ({ emailGroupName: v4_1.edmToTs(emailGroupName, 'Edm.String') }); }
        });
    }
    EmailGroupParams.build = build;
})(EmailGroupParams = exports.EmailGroupParams || (exports.EmailGroupParams = {}));
//# sourceMappingURL=EmailGroupParams.js.map