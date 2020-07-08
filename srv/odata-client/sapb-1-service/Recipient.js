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
exports.Recipient = exports.RecipientField = exports.createRecipient = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[Recipient.build]] instead.
 */
function createRecipient(json) {
    return Recipient.build(json);
}
exports.createRecipient = createRecipient;
/**
 * RecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RecipientField = /** @class */ (function (_super) {
    __extends(RecipientField, _super);
    function RecipientField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Recipient.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new v4_1.ComplexTypeStringPropertyField('UserCode', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.nameTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nameTo = new v4_1.ComplexTypeStringPropertyField('NameTo', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.emailAddress]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailAddress = new v4_1.ComplexTypeStringPropertyField('EmailAddress', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.cellularNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cellularNumber = new v4_1.ComplexTypeStringPropertyField('CellularNumber', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.faxNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faxNumber = new v4_1.ComplexTypeStringPropertyField('FaxNumber', _this, 'Edm.String');
        return _this;
    }
    return RecipientField;
}(v4_1.ComplexTypeField));
exports.RecipientField = RecipientField;
var Recipient;
(function (Recipient) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UserCode: function (userCode) { return ({ userCode: v4_1.edmToTs(userCode, 'Edm.String') }); },
            NameTo: function (nameTo) { return ({ nameTo: v4_1.edmToTs(nameTo, 'Edm.String') }); },
            EmailAddress: function (emailAddress) { return ({ emailAddress: v4_1.edmToTs(emailAddress, 'Edm.String') }); },
            CellularNumber: function (cellularNumber) { return ({ cellularNumber: v4_1.edmToTs(cellularNumber, 'Edm.String') }); },
            FaxNumber: function (faxNumber) { return ({ faxNumber: v4_1.edmToTs(faxNumber, 'Edm.String') }); }
        });
    }
    Recipient.build = build;
})(Recipient = exports.Recipient || (exports.Recipient = {}));
//# sourceMappingURL=Recipient.js.map