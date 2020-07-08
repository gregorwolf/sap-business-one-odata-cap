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
exports.AlertManagementRecipient = exports.AlertManagementRecipientField = exports.createAlertManagementRecipient = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementRecipient.build]] instead.
 */
function createAlertManagementRecipient(json) {
    return AlertManagementRecipient.build(json);
}
exports.createAlertManagementRecipient = createAlertManagementRecipient;
/**
 * AlertManagementRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AlertManagementRecipientField = /** @class */ (function (_super) {
    __extends(AlertManagementRecipientField, _super);
    function AlertManagementRecipientField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AlertManagementRecipient.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new v4_1.ComplexTypeNumberPropertyField('UserCode', _this, 'Edm.Int32');
        return _this;
    }
    return AlertManagementRecipientField;
}(v4_1.ComplexTypeField));
exports.AlertManagementRecipientField = AlertManagementRecipientField;
var AlertManagementRecipient;
(function (AlertManagementRecipient) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UserCode: function (userCode) { return ({ userCode: v4_1.edmToTs(userCode, 'Edm.Int32') }); }
        });
    }
    AlertManagementRecipient.build = build;
})(AlertManagementRecipient = exports.AlertManagementRecipient || (exports.AlertManagementRecipient = {}));
//# sourceMappingURL=AlertManagementRecipient.js.map