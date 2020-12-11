import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MaterialRevaluationSnbParams
 */
export interface MaterialRevaluationSnbParams {
    /**
     * Snb Abs Entry.
     * @nullable
     */
    snbAbsEntry?: number;
    /**
     * New Cost.
     * @nullable
     */
    newCost?: number;
    /**
     * Debit Credit.
     * @nullable
     */
    debitCredit?: number;
    /**
     * System Number.
     * @nullable
     */
    systemNumber?: number;
    /**
     * Lot Number.
     * @nullable
     */
    lotNumber?: string;
    /**
     * Manufacture Number.
     * @nullable
     */
    manufactureNumber?: string;
    /**
     * Admission Date.
     * @nullable
     */
    admissionDate?: Moment;
    /**
     * Expiration Date.
     * @nullable
     */
    expirationDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationSnbParams.build]] instead.
 */
export declare function createMaterialRevaluationSnbParams(json: any): MaterialRevaluationSnbParams;
/**
 * MaterialRevaluationSnbParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationSnbParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationSnbParams> {
    /**
     * Representation of the [[MaterialRevaluationSnbParams.snbAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    snbAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationSnbParams.newCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationSnbParams.debitCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationSnbParams.systemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationSnbParams.lotNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lotNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationSnbParams.manufactureNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufactureNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationSnbParams.admissionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    admissionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationSnbParams.expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expirationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of MaterialRevaluationSnbParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MaterialRevaluationSnbParams {
    /**
     * Metadata information on all properties of the `MaterialRevaluationSnbParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MaterialRevaluationSnbParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialRevaluationSnbParams;
}
//# sourceMappingURL=MaterialRevaluationSnbParams.d.ts.map