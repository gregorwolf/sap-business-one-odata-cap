/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BlanketAgreementsDetailsLine
 */
export interface BlanketAgreementsDetailsLine {
  /**
   * Agreement No.
   * @nullable
   */
  agreementNo?: number;
  /**
   * Agreement Row Number.
   * @nullable
   */
  agreementRowNumber?: number;
  /**
   * Agreement Effective Row Number.
   * @nullable
   */
  agreementEffectiveRowNumber?: number;
  /**
   * From.
   * @nullable
   */
  from?: Moment;
  /**
   * To.
   * @nullable
   */
  to?: Moment;
  /**
   * Release Information.
   * @nullable
   */
  releaseInformation?: string;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: string;
  /**
   * Planned Amount Lc.
   * @nullable
   */
  plannedAmountLc?: number;
  /**
   * Planned Amount Fc.
   * @nullable
   */
  plannedAmountFc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDetailsLine.build]] instead.
 */
export function createBlanketAgreementsDetailsLine(json: any): BlanketAgreementsDetailsLine {
  return BlanketAgreementsDetailsLine.build(json);
}

/**
 * BlanketAgreementsDetailsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementsDetailsLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.agreementNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.agreementRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.agreementEffectiveRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementEffectiveRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementEffectiveRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.from]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  from: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('From', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.to]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  to: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('To', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.releaseInformation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  releaseInformation: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReleaseInformation', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.freeText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FreeText', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedAmountFC', this, 'Edm.Double');
}

export namespace BlanketAgreementsDetailsLine {
  export function build(json: { [keys: string]: FieldType }): BlanketAgreementsDetailsLine {
    return createComplexType(json, {
      AgreementNo: (agreementNo: number) => ({ agreementNo: edmToTs(agreementNo, 'Edm.Int32') }),
      AgreementRowNumber: (agreementRowNumber: number) => ({ agreementRowNumber: edmToTs(agreementRowNumber, 'Edm.Int32') }),
      AgreementEffectiveRowNumber: (agreementEffectiveRowNumber: number) => ({ agreementEffectiveRowNumber: edmToTs(agreementEffectiveRowNumber, 'Edm.Int32') }),
      From: (from: Moment) => ({ from: edmToTs(from, 'Edm.DateTimeOffset') }),
      To: (to: Moment) => ({ to: edmToTs(to, 'Edm.DateTimeOffset') }),
      ReleaseInformation: (releaseInformation: string) => ({ releaseInformation: edmToTs(releaseInformation, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      FreeText: (freeText: string) => ({ freeText: edmToTs(freeText, 'Edm.String') }),
      PlannedAmountLC: (plannedAmountLc: number) => ({ plannedAmountLc: edmToTs(plannedAmountLc, 'Edm.Double') }),
      PlannedAmountFC: (plannedAmountFc: number) => ({ plannedAmountFc: edmToTs(plannedAmountFc, 'Edm.Double') })
    });
  }
}
