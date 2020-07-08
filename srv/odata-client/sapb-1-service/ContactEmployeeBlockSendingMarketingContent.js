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
exports.ContactEmployeeBlockSendingMarketingContent = exports.ContactEmployeeBlockSendingMarketingContentField = exports.createContactEmployeeBlockSendingMarketingContent = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ContactEmployeeBlockSendingMarketingContent.build]] instead.
 */
function createContactEmployeeBlockSendingMarketingContent(json) {
    return ContactEmployeeBlockSendingMarketingContent.build(json);
}
exports.createContactEmployeeBlockSendingMarketingContent = createContactEmployeeBlockSendingMarketingContent;
/**
 * ContactEmployeeBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ContactEmployeeBlockSendingMarketingContentField = /** @class */ (function (_super) {
    __extends(ContactEmployeeBlockSendingMarketingContentField, _super);
    function ContactEmployeeBlockSendingMarketingContentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ContactEmployeeBlockSendingMarketingContent.contactEmployeeAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactEmployeeAbsEntry = new v4_1.ComplexTypeNumberPropertyField('ContactEmployeeAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ContactEmployeeBlockSendingMarketingContent.communicationMediaId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.communicationMediaId = new v4_1.ComplexTypeNumberPropertyField('CommunicationMediaId', _this, 'Edm.Int32');
        return _this;
    }
    return ContactEmployeeBlockSendingMarketingContentField;
}(v4_1.ComplexTypeField));
exports.ContactEmployeeBlockSendingMarketingContentField = ContactEmployeeBlockSendingMarketingContentField;
var ContactEmployeeBlockSendingMarketingContent;
(function (ContactEmployeeBlockSendingMarketingContent) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ContactEmployeeAbsEntry: function (contactEmployeeAbsEntry) { return ({ contactEmployeeAbsEntry: v4_1.edmToTs(contactEmployeeAbsEntry, 'Edm.Int32') }); },
            CommunicationMediaId: function (communicationMediaId) { return ({ communicationMediaId: v4_1.edmToTs(communicationMediaId, 'Edm.Int32') }); }
        });
    }
    ContactEmployeeBlockSendingMarketingContent.build = build;
})(ContactEmployeeBlockSendingMarketingContent = exports.ContactEmployeeBlockSendingMarketingContent || (exports.ContactEmployeeBlockSendingMarketingContent = {}));
//# sourceMappingURL=ContactEmployeeBlockSendingMarketingContent.js.map