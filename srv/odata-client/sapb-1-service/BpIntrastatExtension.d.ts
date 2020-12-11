import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BpIntrastatExtension
 */
export interface BpIntrastatExtension {
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Transport Mode.
     * @nullable
     */
    transportMode?: number;
    /**
     * Incoterms.
     * @nullable
     */
    incoterms?: number;
    /**
     * Nature Of Transactions.
     * @nullable
     */
    natureOfTransactions?: number;
    /**
     * Statistical Procedure.
     * @nullable
     */
    statisticalProcedure?: number;
    /**
     * Customs Procedure.
     * @nullable
     */
    customsProcedure?: number;
    /**
     * Port Of Entry Or Exit.
     * @nullable
     */
    portOfEntryOrExit?: number;
    /**
     * Domestic Or Foreign Id.
     * @nullable
     */
    domesticOrForeignId?: string;
    /**
     * Intrastat Relevant.
     * @nullable
     */
    intrastatRelevant?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[BpIntrastatExtension.build]] instead.
 */
export declare function createBpIntrastatExtension(json: any): BpIntrastatExtension;
/**
 * BpIntrastatExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpIntrastatExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpIntrastatExtension> {
    /**
     * Representation of the [[BpIntrastatExtension.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.transportMode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transportMode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.incoterms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    incoterms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.natureOfTransactions]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    natureOfTransactions: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.statisticalProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statisticalProcedure: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.customsProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsProcedure: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.portOfEntryOrExit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portOfEntryOrExit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.domesticOrForeignId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    domesticOrForeignId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpIntrastatExtension.intrastatRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    intrastatRelevant: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of BpIntrastatExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpIntrastatExtension {
    /**
     * Metadata information on all properties of the `BpIntrastatExtension` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpIntrastatExtension>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpIntrastatExtension;
}
//# sourceMappingURL=BpIntrastatExtension.d.ts.map