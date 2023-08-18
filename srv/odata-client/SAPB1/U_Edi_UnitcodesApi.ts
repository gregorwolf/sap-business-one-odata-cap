/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Edi_Unitcodes } from './U_Edi_Unitcodes';
import { U_Edi_UnitcodesRequestBuilder } from './U_Edi_UnitcodesRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Edi_UnitcodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): U_Edi_UnitcodesApi<DeSerializersT> {
    return new U_Edi_UnitcodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Edi_Unitcodes;

  requestBuilder(): U_Edi_UnitcodesRequestBuilder<DeSerializersT> {
    return new U_Edi_UnitcodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Edi_Unitcodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Edi_Unitcodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        U_Edi_Unitcodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Edi_Unitcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Edi_Unitcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_UO_M: OrderableEdmTypeField<
      U_Edi_Unitcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_UO_M_EN_16931: OrderableEdmTypeField<
      U_Edi_Unitcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_UO_M_STLB_BAU_Z: OrderableEdmTypeField<
      U_Edi_Unitcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Edi_Unitcodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UO_M: fieldBuilder.buildEdmTypeField('U_UoM', 'Edm.String', false),
        /**
         * Static representation of the {@link uUoMEn16931} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UO_M_EN_16931: fieldBuilder.buildEdmTypeField(
          'U_UoM_EN16931',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUoMStlbBauZ} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UO_M_STLB_BAU_Z: fieldBuilder.buildEdmTypeField(
          'U_UoM_STLB_BauZ',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Edi_Unitcodes)
      };
    }

    return this._schema;
  }
}
