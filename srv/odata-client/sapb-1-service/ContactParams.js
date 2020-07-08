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
exports.ContactParams = exports.ContactParamsField = exports.createContactParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ContactParams.build]] instead.
 */
function createContactParams(json) {
    return ContactParams.build(json);
}
exports.createContactParams = createContactParams;
/**
 * ContactParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ContactParamsField = /** @class */ (function (_super) {
    __extends(ContactParamsField, _super);
    function ContactParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ContactParams.contactCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactCode = new v4_1.ComplexTypeNumberPropertyField('ContactCode', _this, 'Edm.Int32');
        return _this;
    }
    return ContactParamsField;
}(v4_1.ComplexTypeField));
exports.ContactParamsField = ContactParamsField;
var ContactParams;
(function (ContactParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ContactCode: function (contactCode) { return ({ contactCode: v4_1.edmToTs(contactCode, 'Edm.Int32') }); }
        });
    }
    ContactParams.build = build;
})(ContactParams = exports.ContactParams || (exports.ContactParams = {}));
//# sourceMappingURL=ContactParams.js.map