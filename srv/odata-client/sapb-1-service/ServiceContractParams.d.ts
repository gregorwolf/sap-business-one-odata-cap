import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceContractParams
 */
export interface ServiceContractParams {
    /**
     * Contract Id.
     * @nullable
     */
    contractId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceContractParams.build]] instead.
 */
export declare function createServiceContractParams(json: any): ServiceContractParams;
/**
 * ServiceContractParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceContractParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceContractParams.contractId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contractId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ServiceContractParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceContractParams;
}
//# sourceMappingURL=ServiceContractParams.d.ts.map