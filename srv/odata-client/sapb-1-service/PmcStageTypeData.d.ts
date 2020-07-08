import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmcStageTypeData
 */
export interface PmcStageTypeData {
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Stage Name.
     * @nullable
     */
    stageName?: string;
    /**
     * Stage Description.
     * @nullable
     */
    stageDescription?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcStageTypeData.build]] instead.
 */
export declare function createPmcStageTypeData(json: any): PmcStageTypeData;
/**
 * PmcStageTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcStageTypeDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmcStageTypeData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcStageTypeData.stageName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmcStageTypeData.stageDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageDescription: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PmcStageTypeData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmcStageTypeData;
}
//# sourceMappingURL=PmcStageTypeData.d.ts.map