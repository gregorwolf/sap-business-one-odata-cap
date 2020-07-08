import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * NcmCodeSetupParams
 */
export interface NcmCodeSetupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Ncm Code.
     * @nullable
     */
    ncmCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NcmCodeSetupParams.build]] instead.
 */
export declare function createNcmCodeSetupParams(json: any): NcmCodeSetupParams;
/**
 * NcmCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NcmCodeSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[NcmCodeSetupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[NcmCodeSetupParams.ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ncmCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NcmCodeSetupParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace NcmCodeSetupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): NcmCodeSetupParams;
}
//# sourceMappingURL=NcmCodeSetupParams.d.ts.map