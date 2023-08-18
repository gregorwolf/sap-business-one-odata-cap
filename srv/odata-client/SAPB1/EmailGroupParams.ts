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
 * EmailGroupParams
 */
export interface EmailGroupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Email Group Code.
   * @nullable
   */
  emailGroupCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Email Group Name.
   * @nullable
   */
  emailGroupName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EmailGroupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmailGroupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmailGroupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmailGroupParams.emailGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EmailGroupCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EmailGroupParams.emailGroupName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailGroupName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EmailGroupName',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of EmailGroupParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EmailGroupParams, fieldOptions);
  }
}

export namespace EmailGroupParams {
  /**
   * Metadata information on all properties of the `EmailGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmailGroupParams>[] = [
    {
      originalName: 'EmailGroupCode',
      name: 'emailGroupCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EmailGroupName',
      name: 'emailGroupName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
