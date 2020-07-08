import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceGroupParams
 */
export interface ServiceGroupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Service Group Code.
     * @nullable
     */
    serviceGroupCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceGroupParams.build]] instead.
 */
export declare function createServiceGroupParams(json: any): ServiceGroupParams;
/**
 * ServiceGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceGroupParams.serviceGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceGroupCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceGroupParams;
}
//# sourceMappingURL=ServiceGroupParams.d.ts.map