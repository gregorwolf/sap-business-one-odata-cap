/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoeInstructions } from './BoeInstructions';
import { BoeInstructionsRequestBuilder } from './BoeInstructionsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BoeInstructionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BoeInstructions<DeSerializersT>, DeSerializersT>
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
  ): BoeInstructionsApi<DeSerializersT> {
    return new BoeInstructionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BoeInstructions;

  requestBuilder(): BoeInstructionsRequestBuilder<DeSerializersT> {
    return new BoeInstructionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BoeInstructions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BoeInstructions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BoeInstructions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BoeInstructions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BoeInstructions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INSTRUCTION_ENTRY: OrderableEdmTypeField<
      BoeInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INSTRUCTION_CODE: OrderableEdmTypeField<
      BoeInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTION_DESC: OrderableEdmTypeField<
      BoeInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CANCEL_INSTRUCTION: EnumField<
      BoeInstructions<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BoeInstructions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link instructionEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_ENTRY: fieldBuilder.buildEdmTypeField(
          'InstructionEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link instructionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_CODE: fieldBuilder.buildEdmTypeField(
          'InstructionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link instructionDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_DESC: fieldBuilder.buildEdmTypeField(
          'InstructionDesc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCancelInstruction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CANCEL_INSTRUCTION: fieldBuilder.buildEnumField(
          'IsCancelInstruction',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BoeInstructions)
      };
    }

    return this._schema;
  }
}
