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
exports.RouteStageParams = exports.RouteStageParamsField = exports.createRouteStageParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[RouteStageParams.build]] instead.
 */
function createRouteStageParams(json) {
    return RouteStageParams.build(json);
}
exports.createRouteStageParams = createRouteStageParams;
/**
 * RouteStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RouteStageParamsField = /** @class */ (function (_super) {
    __extends(RouteStageParamsField, _super);
    function RouteStageParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RouteStageParams.internalNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalNumber = new v4_1.ComplexTypeNumberPropertyField('InternalNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[RouteStageParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[RouteStageParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[RouteStageParams.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new v4_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RouteStageParams.generationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generationTime = new v4_1.ComplexTypeTimePropertyField('GenerationTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[RouteStageParams.dateOfUpdate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfUpdate = new v4_1.ComplexTypeDatePropertyField('DateOfUpdate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return RouteStageParamsField;
}(v4_1.ComplexTypeField));
exports.RouteStageParamsField = RouteStageParamsField;
var RouteStageParams;
(function (RouteStageParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            InternalNumber: function (internalNumber) { return ({ internalNumber: v4_1.edmToTs(internalNumber, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); },
            CreationDate: function (creationDate) { return ({ creationDate: v4_1.edmToTs(creationDate, 'Edm.DateTimeOffset') }); },
            GenerationTime: function (generationTime) { return ({ generationTime: v4_1.edmToTs(generationTime, 'Edm.TimeOfDay') }); },
            DateOfUpdate: function (dateOfUpdate) { return ({ dateOfUpdate: v4_1.edmToTs(dateOfUpdate, 'Edm.DateTimeOffset') }); }
        });
    }
    RouteStageParams.build = build;
})(RouteStageParams = exports.RouteStageParams || (exports.RouteStageParams = {}));
//# sourceMappingURL=RouteStageParams.js.map