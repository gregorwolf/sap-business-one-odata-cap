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
exports.AlertManagementDocument = exports.AlertManagementDocumentField = exports.createAlertManagementDocument = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementDocument.build]] instead.
 */
function createAlertManagementDocument(json) {
    return AlertManagementDocument.build(json);
}
exports.createAlertManagementDocument = createAlertManagementDocument;
/**
 * AlertManagementDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AlertManagementDocumentField = /** @class */ (function (_super) {
    __extends(AlertManagementDocumentField, _super);
    function AlertManagementDocumentField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AlertManagementDocumentField;
}(v4_1.ComplexTypeField));
exports.AlertManagementDocumentField = AlertManagementDocumentField;
var AlertManagementDocument;
(function (AlertManagementDocument) {
    function build(json) {
        return v4_1.createComplexType(json, {});
    }
    AlertManagementDocument.build = build;
})(AlertManagementDocument = exports.AlertManagementDocument || (exports.AlertManagementDocument = {}));
//# sourceMappingURL=AlertManagementDocument.js.map