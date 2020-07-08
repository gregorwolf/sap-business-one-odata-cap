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
exports.EmployeeStatusParams = exports.EmployeeStatusParamsField = exports.createEmployeeStatusParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeStatusParams.build]] instead.
 */
function createEmployeeStatusParams(json) {
    return EmployeeStatusParams.build(json);
}
exports.createEmployeeStatusParams = createEmployeeStatusParams;
/**
 * EmployeeStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeStatusParamsField = /** @class */ (function (_super) {
    __extends(EmployeeStatusParamsField, _super);
    function EmployeeStatusParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeStatusParams.statusId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statusId = new v4_1.ComplexTypeNumberPropertyField('StatusId', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeStatusParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeStatusParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return EmployeeStatusParamsField;
}(v4_1.ComplexTypeField));
exports.EmployeeStatusParamsField = EmployeeStatusParamsField;
var EmployeeStatusParams;
(function (EmployeeStatusParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            StatusId: function (statusId) { return ({ statusId: v4_1.edmToTs(statusId, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    EmployeeStatusParams.build = build;
})(EmployeeStatusParams = exports.EmployeeStatusParams || (exports.EmployeeStatusParams = {}));
//# sourceMappingURL=EmployeeStatusParams.js.map