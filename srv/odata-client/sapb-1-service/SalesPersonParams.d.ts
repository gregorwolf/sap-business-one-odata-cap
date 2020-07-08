import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesPersonParams
 */
export interface SalesPersonParams {
    /**
     * Sales Employee Code.
     * @nullable
     */
    salesEmployeeCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesPersonParams.build]] instead.
 */
export declare function createSalesPersonParams(json: any): SalesPersonParams;
/**
 * SalesPersonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesPersonParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesPersonParams.salesEmployeeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesEmployeeCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesPersonParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesPersonParams;
}
//# sourceMappingURL=SalesPersonParams.d.ts.map