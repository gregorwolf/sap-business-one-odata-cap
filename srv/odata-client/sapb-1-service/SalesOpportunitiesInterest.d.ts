import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesOpportunitiesInterest
 */
export interface SalesOpportunitiesInterest {
    /**
     * Row No.
     * @nullable
     */
    rowNo?: number;
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Primary Interest.
     * @nullable
     */
    primaryInterest?: BoYesNoEnum;
    /**
     * Interest Id.
     * @nullable
     */
    interestId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesInterest.build]] instead.
 */
export declare function createSalesOpportunitiesInterest(json: any): SalesOpportunitiesInterest;
/**
 * SalesOpportunitiesInterestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitiesInterestField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesInterest> {
    /**
     * Representation of the [[SalesOpportunitiesInterest.rowNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesInterest.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesInterest.primaryInterest]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryInterest: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesInterest.interestId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    interestId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SalesOpportunitiesInterestField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesOpportunitiesInterest {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesInterest` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesOpportunitiesInterest>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesInterest;
}
//# sourceMappingURL=SalesOpportunitiesInterest.d.ts.map