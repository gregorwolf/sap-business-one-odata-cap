import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class SalesOpportunitiesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace SalesOpportunitiesLine {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesLine;
}
//# sourceMappingURL=SalesOpportunitiesLine.d.ts.map