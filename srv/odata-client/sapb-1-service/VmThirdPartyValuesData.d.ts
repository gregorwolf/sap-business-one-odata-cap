import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * VmThirdPartyValuesData
 */
export interface VmThirdPartyValuesData {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Third Party System Id.
     * @nullable
     */
    thirdPartySystemId?: number;
    /**
     * Third Party Value.
     * @nullable
     */
    thirdPartyValue?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[VmThirdPartyValuesData.build]] instead.
 */
export declare function createVmThirdPartyValuesData(json: any): VmThirdPartyValuesData;
/**
 * VmThirdPartyValuesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class VmThirdPartyValuesDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[VmThirdPartyValuesData.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VmThirdPartyValuesData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VmThirdPartyValuesData.thirdPartySystemId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    thirdPartySystemId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VmThirdPartyValuesData.thirdPartyValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    thirdPartyValue: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace VmThirdPartyValuesData {
    function build(json: {
        [keys: string]: FieldType;
    }): VmThirdPartyValuesData;
}
//# sourceMappingURL=VmThirdPartyValuesData.d.ts.map