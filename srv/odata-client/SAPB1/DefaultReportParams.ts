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
 * DefaultReportParams
 */
export interface DefaultReportParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Report Code.
   * @nullable
   */
  reportCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DefaultReportParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DefaultReportParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DefaultReportParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DefaultReportParams.reportCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReportCode', 'Edm.String', true);
  /**
   * Representation of the {@link DefaultReportParams.layoutCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LayoutCode', 'Edm.String', true);
  /**
   * Representation of the {@link DefaultReportParams.userId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserID', 'Edm.Int32', true);
  /**
   * Representation of the {@link DefaultReportParams.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);

  /**
   * Creates an instance of DefaultReportParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DefaultReportParams, fieldOptions);
  }
}

export namespace DefaultReportParams {
  /**
   * Metadata information on all properties of the `DefaultReportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DefaultReportParams>[] = [
    {
      originalName: 'ReportCode',
      name: 'reportCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LayoutCode',
      name: 'layoutCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UserID',
      name: 'userId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CardCode',
      name: 'cardCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
