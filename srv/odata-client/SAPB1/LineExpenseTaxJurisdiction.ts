/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * LineExpenseTaxJurisdiction
 */
export interface LineExpenseTaxJurisdiction<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Jurisdiction Code.
   * @nullable
   */
  jurisdictionCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Jurisdiction Type.
   * @nullable
   */
  jurisdictionType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Amount Sc.
   * @nullable
   */
  taxAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Amount Fc.
   * @nullable
   */
  taxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Row Sequence.
   * @nullable
   */
  rowSequence?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * External Calc Tax Rate.
   * @nullable
   */
  externalCalcTaxRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount.
   * @nullable
   */
  externalCalcTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount Fc.
   * @nullable
   */
  externalCalcTaxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount Sc.
   * @nullable
   */
  externalCalcTaxAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * LineExpenseTaxJurisdictionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class LineExpenseTaxJurisdictionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  LineExpenseTaxJurisdiction,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.jurisdictionCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jurisdictionCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'JurisdictionCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.jurisdictionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jurisdictionType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'JurisdictionType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.taxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.taxAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxAmountSC', 'Edm.Double', true);
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.taxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxAmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.taxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxRate', 'Edm.Double', true);
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.rowSequence} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowSequence: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowSequence', 'Edm.Int32', true);
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.externalCalcTaxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxRate',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.externalCalcTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.externalCalcTaxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LineExpenseTaxJurisdiction.externalCalcTaxAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmountSC',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of LineExpenseTaxJurisdictionField.
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
      LineExpenseTaxJurisdiction,
      fieldOptions
    );
  }
}

export namespace LineExpenseTaxJurisdiction {
  /**
   * Metadata information on all properties of the `LineExpenseTaxJurisdiction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LineExpenseTaxJurisdiction>[] =
    [
      {
        originalName: 'JurisdictionCode',
        name: 'jurisdictionCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'JurisdictionType',
        name: 'jurisdictionType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TaxAmount',
        name: 'taxAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxAmountSC',
        name: 'taxAmountSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxAmountFC',
        name: 'taxAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxRate',
        name: 'taxRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'RowSequence',
        name: 'rowSequence',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxRate',
        name: 'externalCalcTaxRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxAmount',
        name: 'externalCalcTaxAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxAmountFC',
        name: 'externalCalcTaxAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxAmountSC',
        name: 'externalCalcTaxAmountSc',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
