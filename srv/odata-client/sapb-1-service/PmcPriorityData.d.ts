import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmcPriorityData
 */
export interface PmcPriorityData {
    /**
     * Priority Id.
     * @nullable
     */
    priorityId?: number;
    /**
     * Priority Name.
     * @nullable
     */
    priorityName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcPriorityData.build]] instead.
 */
export declare function createPmcPriorityData(json: any): PmcPriorityData;
/**
 * PmcPriorityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcPriorityDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmcPriorityData.priorityId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priorityId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcPriorityData.priorityName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priorityName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PmcPriorityData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmcPriorityData;
}
//# sourceMappingURL=PmcPriorityData.d.ts.map