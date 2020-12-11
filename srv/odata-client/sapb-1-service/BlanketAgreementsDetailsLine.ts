/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BlanketAgreementDatePeriodsEnum } from './BlanketAgreementDatePeriodsEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Frequency.
   * @nullable
   */
  frequency?: BlanketAgreementDatePeriodsEnum;
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
   * Consume Sales Forecast.
   * @nullable
   */
  consumeSalesForecast?: BoYesNoEnum;
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
export class BlanketAgreementsDetailsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementsDetailsLine> {
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
   * Representation of the [[BlanketAgreementsDetailsLine.frequency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  frequency: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Frequency', this);
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
   * Representation of the [[BlanketAgreementsDetailsLine.consumeSalesForecast]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consumeSalesForecast: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ConsumeSalesForecast', this);
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

  /**
   * Creates an instance of BlanketAgreementsDetailsLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BlanketAgreementsDetailsLine);
  }
}

export namespace BlanketAgreementsDetailsLine {
  /**
   * Metadata information on all properties of the `BlanketAgreementsDetailsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlanketAgreementsDetailsLine>[] = [{
    originalName: 'AgreementNo',
    name: 'agreementNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AgreementRowNumber',
    name: 'agreementRowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AgreementEffectiveRowNumber',
    name: 'agreementEffectiveRowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Frequency',
    name: 'frequency',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'From',
    name: 'from',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'To',
    name: 'to',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReleaseInformation',
    name: 'releaseInformation',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FreeText',
    name: 'freeText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ConsumeSalesForecast',
    name: 'consumeSalesForecast',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PlannedAmountLC',
    name: 'plannedAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PlannedAmountFC',
    name: 'plannedAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BlanketAgreementsDetailsLine {
    return deserializeComplexTypeV4(json, BlanketAgreementsDetailsLine);
  }
}
