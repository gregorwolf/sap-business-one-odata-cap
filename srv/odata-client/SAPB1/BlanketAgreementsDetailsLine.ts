/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlanketAgreementDatePeriodsEnum } from './BlanketAgreementDatePeriodsEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * BlanketAgreementsDetailsLine
 */
export interface BlanketAgreementsDetailsLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Agreement No.
   * @nullable
   */
  agreementNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Agreement Row Number.
   * @nullable
   */
  agreementRowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Agreement Effective Row Number.
   * @nullable
   */
  agreementEffectiveRowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Frequency.
   * @nullable
   */
  frequency?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * From.
   * @nullable
   */
  from?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To.
   * @nullable
   */
  to?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Release Information.
   * @nullable
   */
  releaseInformation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Consume Sales Forecast.
   * @nullable
   */
  consumeSalesForecast?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Planned Amount Lc.
   * @nullable
   */
  plannedAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Planned Amount Fc.
   * @nullable
   */
  plannedAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * BlanketAgreementsDetailsLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementsDetailsLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BlanketAgreementsDetailsLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.agreementNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AgreementNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.agreementRowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AgreementRowNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.agreementEffectiveRowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementEffectiveRowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AgreementEffectiveRowNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.frequency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  frequency: EnumField<
    EntityT,
    DeSerializersT,
    BlanketAgreementDatePeriodsEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Frequency',
    BlanketAgreementDatePeriodsEnum,
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.from} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  from: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('From', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.to} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  to: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('To', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.releaseInformation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  releaseInformation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReleaseInformation',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.warehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Warehouse', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.freeText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeText', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.consumeSalesForecast} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consumeSalesForecast: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConsumeSalesForecast',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.plannedAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDetailsLine.plannedAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedAmountFC',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of BlanketAgreementsDetailsLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      BlanketAgreementsDetailsLine,
      fieldOptions
    );
  }
}

export namespace BlanketAgreementsDetailsLine {
  /**
   * Metadata information on all properties of the `BlanketAgreementsDetailsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlanketAgreementsDetailsLine>[] =
    [
      {
        originalName: 'AgreementNo',
        name: 'agreementNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'AgreementRowNumber',
        name: 'agreementRowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'AgreementEffectiveRowNumber',
        name: 'agreementEffectiveRowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Frequency',
        name: 'frequency',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'From',
        name: 'from',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'To',
        name: 'to',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ReleaseInformation',
        name: 'releaseInformation',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Quantity',
        name: 'quantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Warehouse',
        name: 'warehouse',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'FreeText',
        name: 'freeText',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ConsumeSalesForecast',
        name: 'consumeSalesForecast',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'PlannedAmountLC',
        name: 'plannedAmountLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PlannedAmountFC',
        name: 'plannedAmountFc',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
