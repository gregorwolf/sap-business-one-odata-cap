import { Moment } from 'moment';
import { DownPaymentToDrawDetails, DownPaymentToDrawDetailsField } from './DownPaymentToDrawDetails';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DownPaymentToDraw
 */
export interface DownPaymentToDraw {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Amount To Draw.
     * @nullable
     */
    amountToDraw?: number;
    /**
     * Amount To Draw Fc.
     * @nullable
     */
    amountToDrawFc?: number;
    /**
     * Amount To Draw Sc.
     * @nullable
     */
    amountToDrawSc?: number;
    /**
     * Doc Internal Id.
     * @nullable
     */
    docInternalId?: number;
    /**
     * Row Num.
     * @nullable
     */
    rowNum?: number;
    /**
     * Doc Number.
     * @nullable
     */
    docNumber?: number;
    /**
     * Tax.
     * @nullable
     */
    tax?: number;
    /**
     * Tax Fc.
     * @nullable
     */
    taxFc?: number;
    /**
     * Tax Sc.
     * @nullable
     */
    taxSc?: number;
    /**
     * Gross Amount To Draw.
     * @nullable
     */
    grossAmountToDraw?: number;
    /**
     * Gross Amount To Draw Fc.
     * @nullable
     */
    grossAmountToDrawFc?: number;
    /**
     * Gross Amount To Draw Sc.
     * @nullable
     */
    grossAmountToDrawSc?: number;
    /**
     * Down Payments To Draw Details.
     * @nullable
     */
    downPaymentsToDrawDetails?: DownPaymentToDrawDetails;
}
/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDraw.build]] instead.
 */
export declare function createDownPaymentToDraw(json: any): DownPaymentToDraw;
/**
 * DownPaymentToDrawField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DownPaymentToDrawField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DownPaymentToDraw.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.amountToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountToDraw: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.amountToDrawFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountToDrawFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.amountToDrawSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountToDrawSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.docInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docInternalId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.rowNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.docNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.tax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.taxFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.taxSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.grossAmountToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossAmountToDraw: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.grossAmountToDrawFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossAmountToDrawFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.grossAmountToDrawSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossAmountToDrawSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDraw.downPaymentsToDrawDetails]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    downPaymentsToDrawDetails: DownPaymentToDrawDetailsField<EntityT>;
}
export declare namespace DownPaymentToDraw {
    function build(json: {
        [keys: string]: FieldType | DownPaymentToDrawDetails;
    }): DownPaymentToDraw;
}
//# sourceMappingURL=DownPaymentToDraw.d.ts.map