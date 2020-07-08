import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * NatureOfAssesseeParams
 */
export interface NatureOfAssesseeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NatureOfAssesseeParams.build]] instead.
 */
export declare function createNatureOfAssesseeParams(json: any): NatureOfAssesseeParams;
/**
 * NatureOfAssesseeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NatureOfAssesseeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[NatureOfAssesseeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[NatureOfAssesseeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NatureOfAssesseeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace NatureOfAssesseeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): NatureOfAssesseeParams;
}
//# sourceMappingURL=NatureOfAssesseeParams.d.ts.map