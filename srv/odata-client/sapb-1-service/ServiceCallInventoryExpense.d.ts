import { Moment } from 'moment';
import { BoSvcExpPartTypes } from './BoSvcExpPartTypes';
import { BoSvcEpxDocTypes } from './BoSvcEpxDocTypes';
import { BoStckTrnDir } from './BoStckTrnDir';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceCallInventoryExpense
 */
export interface ServiceCallInventoryExpense {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Part Type.
     * @nullable
     */
    partType?: BoSvcExpPartTypes;
    /**
     * Document Type.
     * @nullable
     */
    documentType?: BoSvcEpxDocTypes;
    /**
     * Document Posting Date.
     * @nullable
     */
    documentPostingDate?: Moment;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
    /**
     * Stock Transfer Direction.
     * @nullable
     */
    stockTransferDirection?: BoStckTrnDir;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallInventoryExpense.build]] instead.
 */
export declare function createServiceCallInventoryExpense(json: any): ServiceCallInventoryExpense;
/**
 * ServiceCallInventoryExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallInventoryExpenseField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallInventoryExpense> {
    /**
     * Representation of the [[ServiceCallInventoryExpense.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.partType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    partType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.documentPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentPostingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.stockTransferDirection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockTransferDirection: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceCallInventoryExpenseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallInventoryExpense {
    /**
     * Metadata information on all properties of the `ServiceCallInventoryExpense` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallInventoryExpense>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallInventoryExpense;
}
//# sourceMappingURL=ServiceCallInventoryExpense.d.ts.map