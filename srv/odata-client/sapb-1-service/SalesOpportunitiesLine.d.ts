import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSoStatus } from './BoSoStatus';
import { BoAparDocumentTypes } from './BoAparDocumentTypes';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesOpportunitiesLine
 */
export interface SalesOpportunitiesLine {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Sales Person.
     * @nullable
     */
    salesPerson?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Closing Date.
     * @nullable
     */
    closingDate?: Moment;
    /**
     * Stage Key.
     * @nullable
     */
    stageKey?: number;
    /**
     * Percentage Rate.
     * @nullable
     */
    percentageRate?: number;
    /**
     * Max Local Total.
     * @nullable
     */
    maxLocalTotal?: number;
    /**
     * Max System Total.
     * @nullable
     */
    maxSystemTotal?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Contact.
     * @nullable
     */
    contact?: BoYesNoEnum;
    /**
     * Status.
     * @nullable
     */
    status?: BoSoStatus;
    /**
     * Weighted Amount Local.
     * @nullable
     */
    weightedAmountLocal?: number;
    /**
     * Weighted Amount System.
     * @nullable
     */
    weightedAmountSystem?: number;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
    /**
     * Document Type.
     * @nullable
     */
    documentType?: BoAparDocumentTypes;
    /**
     * Document Checkbox.
     * @nullable
     */
    documentCheckbox?: BoYesNoEnum;
    /**
     * Contact Person.
     * @nullable
     */
    contactPerson?: number;
    /**
     * Bp Chanel Name.
     * @nullable
     */
    bpChanelName?: string;
    /**
     * Bp Chanel Code.
     * @nullable
     */
    bpChanelCode?: string;
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Data Ownershipfield.
     * @nullable
     */
    dataOwnershipfield?: number;
    /**
     * Bp Channel Contact.
     * @nullable
     */
    bpChannelContact?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesLine.build]] instead.
 */
export declare function createSalesOpportunitiesLine(json: any): SalesOpportunitiesLine;
/**
 * SalesOpportunitiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitiesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesLine> {
    /**
     * Representation of the [[SalesOpportunitiesLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.salesPerson]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesPerson: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    closingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.stageKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.percentageRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentageRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.maxLocalTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxLocalTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.maxSystemTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxSystemTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.contact]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contact: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.weightedAmountLocal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weightedAmountLocal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.weightedAmountSystem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weightedAmountSystem: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.documentCheckbox]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentCheckbox: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactPerson: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.bpChanelName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpChanelName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.bpChanelCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpChanelCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.dataOwnershipfield]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dataOwnershipfield: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesLine.bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpChannelContact: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SalesOpportunitiesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesOpportunitiesLine {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesOpportunitiesLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesLine;
}
//# sourceMappingURL=SalesOpportunitiesLine.d.ts.map