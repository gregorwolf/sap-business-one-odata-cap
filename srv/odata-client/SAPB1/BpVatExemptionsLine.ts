/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * BpVatExemptionsLine
 */
export interface BpVatExemptionsLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Exemption Doc Num.
   * @nullable
   */
  exemptionDocNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Issue Time.
   * @nullable
   */
  issueTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Exemption Type.
   * @nullable
   */
  exemptionType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Apply All Items.
   * @nullable
   */
  applyAllItems?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Rate.
   * @nullable
   */
  vatRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Authorities Name.
   * @nullable
   */
  authoritiesName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * BpVatExemptionsLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpVatExemptionsLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpVatExemptionsLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpVatExemptionsLine.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpVatExemptionsLine.lineNumber} property for query construction.
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
   * Representation of the {@link BpVatExemptionsLine.exemptionDocNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptionDocNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExemptionDocNum',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpVatExemptionsLine.issueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IssueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BpVatExemptionsLine.issueTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IssueTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link BpVatExemptionsLine.exemptionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptionType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExemptionType', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpVatExemptionsLine.applyAllItems} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  applyAllItems: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ApplyAllItems', BoYesNoEnum, true);
  /**
   * Representation of the {@link BpVatExemptionsLine.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpVatExemptionsLine.itemDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ItemDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpVatExemptionsLine.vatRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VATRate', 'Edm.Double', true);
  /**
   * Representation of the {@link BpVatExemptionsLine.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpVatExemptionsLine.authoritiesName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authoritiesName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AuthoritiesName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpVatExemptionsLine.validFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ValidFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BpVatExemptionsLine.validTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ValidTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BpVatExemptionsLine.visualOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisualOrder', 'Edm.Int32', true);

  /**
   * Creates an instance of BpVatExemptionsLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BpVatExemptionsLine, fieldOptions);
  }
}

export namespace BpVatExemptionsLine {
  /**
   * Metadata information on all properties of the `BpVatExemptionsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpVatExemptionsLine>[] = [
    {
      originalName: 'AbsoluteEntry',
      name: 'absoluteEntry',
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
      originalName: 'ExemptionDocNum',
      name: 'exemptionDocNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IssueDate',
      name: 'issueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'IssueTime',
      name: 'issueTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'ExemptionType',
      name: 'exemptionType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ApplyAllItems',
      name: 'applyAllItems',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemDescription',
      name: 'itemDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VATRate',
      name: 'vatRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxCode',
      name: 'taxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AuthoritiesName',
      name: 'authoritiesName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ValidFrom',
      name: 'validFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ValidTo',
      name: 'validTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'VisualOrder',
      name: 'visualOrder',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
