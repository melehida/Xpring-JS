/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var signed_transaction_pb = require('./signed_transaction_pb.js');
goog.object.extend(proto, signed_transaction_pb);
goog.exportSymbol('proto.io.xpring.SubmitSignedTransactionRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.xpring.SubmitSignedTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.xpring.SubmitSignedTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.xpring.SubmitSignedTransactionRequest.displayName = 'proto.io.xpring.SubmitSignedTransactionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.xpring.SubmitSignedTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.xpring.SubmitSignedTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.xpring.SubmitSignedTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.xpring.SubmitSignedTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedTransaction: (f = msg.getSignedTransaction()) && signed_transaction_pb.SignedTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.xpring.SubmitSignedTransactionRequest}
 */
proto.io.xpring.SubmitSignedTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.xpring.SubmitSignedTransactionRequest;
  return proto.io.xpring.SubmitSignedTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.xpring.SubmitSignedTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.xpring.SubmitSignedTransactionRequest}
 */
proto.io.xpring.SubmitSignedTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new signed_transaction_pb.SignedTransaction;
      reader.readMessage(value,signed_transaction_pb.SignedTransaction.deserializeBinaryFromReader);
      msg.setSignedTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.xpring.SubmitSignedTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.xpring.SubmitSignedTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.xpring.SubmitSignedTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.xpring.SubmitSignedTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      signed_transaction_pb.SignedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional SignedTransaction signed_transaction = 1;
 * @return {?proto.io.xpring.SignedTransaction}
 */
proto.io.xpring.SubmitSignedTransactionRequest.prototype.getSignedTransaction = function() {
  return /** @type{?proto.io.xpring.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, signed_transaction_pb.SignedTransaction, 1));
};


/** @param {?proto.io.xpring.SignedTransaction|undefined} value */
proto.io.xpring.SubmitSignedTransactionRequest.prototype.setSignedTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.io.xpring.SubmitSignedTransactionRequest.prototype.clearSignedTransaction = function() {
  this.setSignedTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.xpring.SubmitSignedTransactionRequest.prototype.hasSignedTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.io.xpring);
